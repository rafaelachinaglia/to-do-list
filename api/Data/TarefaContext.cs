using Microsoft.EntityFrameworkCore;
using ToDoAPI.Models;

namespace ToDoAPI.Data
{
public class TarefaContext : DbContext
        {

            public DbSet<Tarefa> Tarefas { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=ListaDeTarefas;Trusted_Connection=true;");
            }


        }
    }
