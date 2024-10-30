using System.Text.Json.Serialization;

namespace FlappyBirdVS.Model
{
    public class Score
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Temps { get; set; }
        public int Value { get; set; }
        public DateTime Date { get; set; }
        public bool Visibilite { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
        public Score(int idScore, string username, int temps, DateTime date, int value, bool visibilite, User user)
        {
            Id = idScore;

            Temps = temps;

            Date = date;

            Visibilite = visibilite;

            User = user;

            Username = username;

            Value = value;
        }
        public Score() { }
    }
}
