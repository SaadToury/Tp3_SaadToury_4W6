using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FlappyBirdVS.Model
{
    public class Score
    {
        public int Id { get; set; }

        [Required]
        [Range(0,int.MaxValue)]
        public int MaxScore { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
    }
}
