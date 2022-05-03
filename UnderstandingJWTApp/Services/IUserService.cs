using System.Threading.Tasks;
using TravelPortal.Models;

namespace TravelPortal.Services
{
    public interface IUserService
    {
        Task<UserDTO> Register(UserDTO user);
        Task<UserDTO> Login(UserDTO user);
    }
}