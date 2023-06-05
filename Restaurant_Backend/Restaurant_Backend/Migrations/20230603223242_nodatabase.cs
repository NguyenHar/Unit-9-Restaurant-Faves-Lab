using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Restaurant_Backend.Migrations
{
    /// <inheritdoc />
    public partial class nodatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Description", "OrderAgain", "Rating", "Restaurant" },
                values: new object[] { 2, "Burger Bar", true, 5, "Hopcat" });
        }
    }
}
