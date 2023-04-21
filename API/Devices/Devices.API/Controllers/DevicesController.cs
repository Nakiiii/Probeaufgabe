using Devices.API.Data;
using Devices.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Devices.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DevicesController : Controller
    {
        private readonly DevicesDbContext devicesDbContext;
        public DevicesController(DevicesDbContext devicesDbContext)
        {
            this.devicesDbContext = devicesDbContext;
        }


        // Get All Devices
        [HttpGet]
        public async Task<IActionResult> GetAllDevices()
        {
            var devices = await devicesDbContext.Devices.ToListAsync();
            return Ok(devices);
        }

        // Get single device
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetDevice")]
        public async Task<IActionResult> GetDevice([FromRoute] Guid id)
        {
            var device = await devicesDbContext.Devices.FirstOrDefaultAsync(x => x.Id == id);
            if (device != null)
            {
                return Ok(device);
            }
            return NotFound("Device not found");
        }

        // Add single device
        [HttpPost]
        public async Task<IActionResult> AddDevice([FromBody] Device device)
        {
            device.Id = Guid.NewGuid();

            await devicesDbContext.Devices.AddAsync(device);
            await devicesDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDevice), new { id = device.Id}, device);
        }

        // Delete a device
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteDevice([FromRoute] Guid id)
        {
            var existingDevice = await devicesDbContext.Devices.FirstOrDefaultAsync(x => x.Id == id);
            if (existingDevice != null)
            {
                devicesDbContext.Remove(existingDevice);
                await devicesDbContext.SaveChangesAsync();
                return Ok(existingDevice);
            }
            return NotFound("Device not found");
        }

        

    }
}
