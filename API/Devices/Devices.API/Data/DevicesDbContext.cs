using Devices.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Devices.API.Data
{
    public class DevicesDbContext : DbContext
    {
        public DevicesDbContext(DbContextOptions options) : base(options)
        {
        }

        // DbSet
        public DbSet<Device> Devices { get; set; }
    }
}
