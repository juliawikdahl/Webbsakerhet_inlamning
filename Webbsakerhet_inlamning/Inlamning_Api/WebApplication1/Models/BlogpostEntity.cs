using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class BlogpostEntity
    {
        public BlogpostEntity()
        {
        }

        public BlogpostEntity(string title, string message)
        {
            Title = title;
            Message = message;
        }

        public BlogpostEntity(int id, string title, string message)
        {
            Id = id;
            Title = title;
            Message = message;
        }
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Title { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Message { get; set; }
    }


    public class BlogpostModel
    {
        public BlogpostModel()
        {

        }
        public BlogpostModel(string title, string message)
        {
            Title = title;
            Message = message;
        }

        public string Title { get; set; }
        public string Message { get; set; }

    }
}