using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ShowsAPI.DTOs;
using ShowsAPI.Entities;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShowsAPI.Controllers
{
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDBContext context,IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/genres
        public async  Task<ActionResult<List<GenreDTO>>> Get() 
        {
            logger.LogInformation("Getting all the genres");
            var genres = await context.Genres.ToListAsync();
            return mapper.Map<List<GenreDTO>>(genres);
        }

        [HttpGet("{Id:int}" , Name = "getGenre")] // api/genres/example
        public ActionResult<Genre> get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Genres.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
