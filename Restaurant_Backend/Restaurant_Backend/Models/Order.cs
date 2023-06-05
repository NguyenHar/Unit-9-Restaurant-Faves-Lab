using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Restaurant_Backend.Models
{
    public partial class Order
    {
        public int Id { get; set; } // Primary key
        public string? Description { get; set; } // What was ordered
        public string? Restaurant { get; set; } // Name of the restaurant
        public int? Rating { get; set; } // 1 to 5 rating
        public bool? OrderAgain { get; set; } // Decision on ordering again
    }
}
