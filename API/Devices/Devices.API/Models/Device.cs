using System.ComponentModel.DataAnnotations;

namespace Devices.API.Models
{
    public class Device
    {
        [Key]
        public Guid Id { get; set; }

        public string deviceId { get; set; }
        public string deviceName { get; set; }
        public string deviceTypeId { get; set; }
        public bool failsafe { get; set; }
        public double tempMin { get; set; }
        public double tempMax { get; set; }
        public string installationPosition { get; set; }
        public bool insertIntol9InchCabinet { get; set; }
        public bool motionEnable { get; set; }
        public bool siplusCatalog { get; set; }
        public bool simaticCatalog { get; set; }
        public double rotationAxisNumber { get; set; }
        public double positionAxisNumber { get; set; }
        public bool? advancedEnvironmentalConditions { get; set; }
        public bool? terminalEvent { get; set; }
    }
}
