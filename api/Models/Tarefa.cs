using System.ComponentModel.DataAnnotations;

namespace ToDoAPI.Models
{
    public class Tarefa
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Descricao { get; set; }

        public bool Status { get; set; }


    }
}
