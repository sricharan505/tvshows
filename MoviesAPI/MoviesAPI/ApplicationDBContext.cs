using Microsoft.EntityFrameworkCore;
using ShowsAPI.Entities;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace ShowsAPI
{
    public class ApplicationDBContext: DbContext
    {
        public ApplicationDBContext([NotNullAttribute] DbContextOptions options): base(options)
        {

        }

        public DbSet<Genre> Genres { get; set; }

    }
}
