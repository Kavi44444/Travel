namespace TravelPortal.Models
{
    public class User
    {
        public int EId { get; set; }
        public string Empname { get; set; }
        public byte[] Password { get; set; }
        public byte[] PasswKey { get; set; }

        public string Role { get; set; }
        public int ManagerId { get; set; }
        public int Age { get; set; }
        public long Mobile { get; set; }
        public string Email { get; set; }
        public string Region { get; set; }

    }
}