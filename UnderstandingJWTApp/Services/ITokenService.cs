using TravelPortal.Models;

namespace TravelPortal.Services
{
    public interface ITokenService
    {
        public string GenerateToken(UserDTO user);
    }
}