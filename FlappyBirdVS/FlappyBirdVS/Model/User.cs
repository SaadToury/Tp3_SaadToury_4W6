using Microsoft.AspNetCore.Identity;

namespace FlappyBirdVS.Model
{
    public class User : IdentityUser
    {
        public List<Score> Scores { get; set; } = null!;
    }
}
