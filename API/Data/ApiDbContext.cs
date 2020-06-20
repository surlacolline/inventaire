using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.Models;

namespace webapi.Data
{
    public class ApiDbContext : IdentityDbContext<User,Role,int>
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }

        //public DbSet<date> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
}
