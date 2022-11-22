#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ganss.Xss;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/blogpost")]
    [ApiController]
    public class Blogpost : ControllerBase
    {
        private readonly SqlContext _context;

        public Blogpost(SqlContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogpostModel>>> GetAllBLogposts()
        {
            var items = new List<BlogpostModel>();

            foreach (var item in await _context.Blogposts.ToListAsync())
                items.Add(new BlogpostModel(item.Title, item.Message));

            return items;
        }

        [HttpPost]
        public async Task<ActionResult<BlogpostModel>> PostBlogpostEntity(BlogpostModel model)
        {
            var sanitizer = new HtmlSanitizer();
            var cleanTitle = sanitizer.Sanitize(model.Title);
            var cleanMessage = sanitizer.Sanitize(model.Message);
            var blogpostEntity = new BlogpostEntity(cleanTitle, cleanMessage);
            _context.Blogposts.Add(blogpostEntity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostBlogpostEntity", new { id = blogpostEntity.Id }, new BlogpostModel(blogpostEntity.Title,
                blogpostEntity.Message));
        }

    }
}
