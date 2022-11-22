using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1
{
    public class SqlContext : DbContext
    {
        public SqlContext()
        {

        }
        public SqlContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<BlogpostEntity> Blogposts { get; set; }
    }
}
