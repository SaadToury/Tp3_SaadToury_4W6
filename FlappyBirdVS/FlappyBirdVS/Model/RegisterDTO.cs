﻿using System.ComponentModel.DataAnnotations;

namespace FlappyBirdVS.Model
{
    public class RegisterDTO
    {
        [Required]
        public string Username { get; set; } = null!;

        [Required, EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;
        [Required]
        public string Passwordconfirm { get; set; } = null!;


    }
}
