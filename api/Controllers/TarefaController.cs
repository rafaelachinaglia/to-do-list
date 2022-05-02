using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using ToDoAPI.Data;
using ToDoAPI.Models;

namespace ToDoAPI.Controllers
{
        [ApiController]
        [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        private TarefaContext _context;

        public TarefaController ()
        {
            _context = new TarefaContext();
        }

        [HttpPost]
        public IActionResult AdicionaTarefa([FromBody] Tarefa tarefa)
        {
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaTarefasPorId), new { Id = tarefa.Id }, tarefa);
        }

        [HttpGet]
        public IActionResult RecuperaTarefas()
        {
            return Ok(_context.Tarefas);

        }

        [HttpGet("recuperarConcluidas")]
        public IEnumerable<Tarefa> RecuperarTarefaConcluida()
        {
            return _context.Tarefas.Where(c => c.Status == true);
        }


        [HttpGet("{id}")]
        public IActionResult RecuperaTarefasPorId(int id)
        {
            Tarefa tarefa = VerifyIsNull(id);
            if (tarefa != null)
            {
                return Ok(tarefa);

            }
            return NotFound();

        }

        [HttpPut("{id}")]
        public IActionResult AtualizaTarefa (int id, [FromBody] Tarefa taskDto)
        {
             Tarefa tarefa = VerifyIsNull(id);
            if (tarefa == null)
            {
                return NotFound();
            };

            tarefa.Descricao = taskDto.Descricao;
            tarefa.Status = taskDto.Status;          
            _context.SaveChanges();
            return NoContent();

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            Tarefa task = VerifyIsNull(id);
            if (task == null)
            {
                return NotFound(task);
            }
            _context.Remove(task);
            _context.SaveChanges();
            return NoContent();
        }


        public Tarefa VerifyIsNull(int id)
        {
            Tarefa task = _context.Tarefas.FirstOrDefault(m => m.Id == id);
            return task;
        }


    }


}
