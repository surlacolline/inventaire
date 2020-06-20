using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Models
{
    public class Post
    {
        private int id;
        private string content;
        private string category;
        private int loveIts;
        private DateTime createAt;

        public Post()
        {
            createAt = DateTime.Now;
        }

        public int Id { get => id; set => id = value; }
        public string Title { get; set; }
        public string Content { get => content; set => content = value; }
        public string Category { get => category; set => category = value; }
        public int LoveIts { get => loveIts; set => loveIts = value; }
        public DateTime CreatedAt { get => createAt; set => createAt = value; }
    }
}
