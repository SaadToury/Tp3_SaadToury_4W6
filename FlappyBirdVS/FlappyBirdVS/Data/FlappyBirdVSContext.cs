using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FlappyBirdVS.Model;

namespace FlappyBirdVS.Data
{
    public class FlappyBirdVSContext : DbContext
    {
        public FlappyBirdVSContext (DbContextOptions<FlappyBirdVSContext> options)
            : base(options)
        {
        }

        public DbSet<FlappyBirdVS.Model.Score> Score { get; set; } = default!;
    }
}
