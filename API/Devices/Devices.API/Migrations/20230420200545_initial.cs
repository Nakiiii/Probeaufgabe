using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Devices.API.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    deviceId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    deviceName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    deviceTypeId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    failsafe = table.Column<bool>(type: "bit", nullable: false),
                    tempMin = table.Column<double>(type: "float", nullable: false),
                    tempMax = table.Column<double>(type: "float", nullable: false),
                    installationPosition = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    insertIntol9InchCabinet = table.Column<bool>(type: "bit", nullable: false),
                    motionEnable = table.Column<bool>(type: "bit", nullable: false),
                    siplusCatalog = table.Column<bool>(type: "bit", nullable: false),
                    simaticCatalog = table.Column<bool>(type: "bit", nullable: false),
                    rotationAxisNumber = table.Column<double>(type: "float", nullable: false),
                    positionAxisNumber = table.Column<double>(type: "float", nullable: false),
                    advancedEnvironmentalConditions = table.Column<bool>(type: "bit", nullable: true),
                    terminalEvent = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devices");
        }
    }
}
