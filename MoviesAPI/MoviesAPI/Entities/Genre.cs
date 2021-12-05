﻿using ShowsAPI.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ShowsAPI.Entities
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage="The field with name {0} is required")]
        [StringLength(10)]
        [FirstLetterUppercase]
        public string Name { get; set; }

        
    }
}
