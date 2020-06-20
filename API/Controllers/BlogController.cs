using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
   [Authorize]
    public class BlogController : Controller
    {
        private readonly ApiDbContext apiDbContext;
        public BlogController(ApiDbContext apiDbContext)
        {
            this.apiDbContext = apiDbContext;
        }

        [HttpPost]
        public IActionResult CreatePost([FromBody] Models.Post post)
        {
            this.apiDbContext.Posts.Add(post);
            this.apiDbContext.SaveChanges();
            
            return Ok();
        }

        [HttpGet] // GET api/blog
        public IActionResult GetPosts()
        {
            var posts = this.apiDbContext.Posts.OrderByDescending(x => x.CreatedAt).ToList();
            return Ok(posts);
        }

        [HttpGet("cat")] // GET api/blog/cat
        public IActionResult GetCategories()
        {
            var categories = this.apiDbContext.Posts.Select(x => x.Category).Distinct().ToList();
            return Ok(categories);
        }

        [HttpGet("{postId}")]
        public IActionResult GetPost(int postId)
        {
            var postFound = this.apiDbContext.Posts.FirstOrDefault(post => post.Id == postId);
            if (postFound == null)
                return NotFound(postId);

            return Ok(postFound);
        }

        [HttpPut("{postId}/edit")]
        public IActionResult EditPost(int postId, [FromBody] Post post)
        {
            //comparer avec Update ARticle
            var postFound = this.apiDbContext.Posts.FirstOrDefault(pst => pst.Id == post.Id);
            if (postFound == null)
                return NotFound(post.Id);

            postFound.Title = post.Title;
            postFound.Content = post.Content;

            this.apiDbContext.SaveChanges();

            return Ok();
        }

        [HttpPut("{postId}/evaluate")]
        public IActionResult EvaluatePost(int postId, string loveIts)
        {

            var postFound = this.apiDbContext.Posts.FirstOrDefault(post => post.Id == postId);
            if (postFound == null)
            {
                return NotFound(postId);
            }

            if (loveIts == "love")
            {
                postFound.LoveIts++;
            }
            else
            {
                postFound.LoveIts--;
            }

            this.apiDbContext.SaveChanges();

            return Ok();
        }
        
        /// <summary>
        /// Suppression d'un post
        /// </summary>
        /// <param name="postId">Id du post à supprimer</param>
        /// <returns></returns>
        [HttpDelete("{postId}/delete")]
        public IActionResult DeletePost(int postId)
        {
            var postFound = this.apiDbContext.Posts.FirstOrDefault(post => post.Id == postId);
            if (postFound == null)
                return NotFound(postId);

            this.apiDbContext.Posts.Remove(postFound);
            this.apiDbContext.SaveChanges();

            return Ok();
        }

    }
}
