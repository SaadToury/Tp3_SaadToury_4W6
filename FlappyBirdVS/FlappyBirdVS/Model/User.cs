using Microsoft.AspNetCore.Identity;

namespace FlappyBirdVS.Model
{
    public class User : IdentityUser
    {
        
        public virtual List<Score> Scores { get; set; } = null!;
    }
}
