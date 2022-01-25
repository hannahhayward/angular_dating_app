using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class UserLike
    {
        public AppUser SourceUser { get; set; }
        public int SourceUserId { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public AppUser LikedUser { get; set; }
        public int LikedUserId { get; set; }
    }
}