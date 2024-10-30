using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FlappyBirdVS.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace FlappyBirdVS.Data
{
    public class FlappyBirdVSContext : IdentityDbContext<User>
    {
        public FlappyBirdVSContext (DbContextOptions<FlappyBirdVSContext> options)
            : base(options)
        {
        }

        public DbSet<FlappyBirdVS.Model.Score> Score { get; set; } = default!;
    }
}
