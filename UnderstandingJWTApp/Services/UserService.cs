using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using TravelPortal.Models;
using System;
using System.Security.Cryptography;
using System.Text;

namespace TravelPortal.Services
{
    public class UserService : IUserService
    {
        SqlConnection conn;
        private readonly ITokenService _tokenService;

        public UserService(IConfiguration configuration, ITokenService tokenService)
        {
            conn = new SqlConnection(configuration.GetConnectionString("conn"));
            _tokenService = tokenService;
        }
        public async Task<UserDTO> Login(UserDTO user)
        {

            SqlCommand cmd = new SqlCommand("proc_Login", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@un", user.Empname);

            conn.Open();
            SqlDataReader reader = await cmd.ExecuteReaderAsync();
            if (reader.Read())
            {
                byte[] dbPass = (byte[])reader[2];
                byte[] data = (byte[])reader[3];
                HMACSHA512 hmac = new HMACSHA512(data);
                byte[] userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != dbPass[i])
                    {
                        return null;
                    }
                }
                DataSet dsProducts = new DataSet();
                user.EId= Convert.ToInt32(reader[0]);
                user.Role = reader[4].ToString();
                user.ManagerId= Convert.ToInt32(reader[5]);
                user.Email = reader[6].ToString();
                user.Mobile= Convert.ToInt64(reader[7]);
                user.Age= Convert.ToInt32(reader[8]);
                user.Region= reader[9].ToString();
                return user;
            }
            conn.Close();
            return null;
        }

        public async Task<UserDTO> Register(UserDTO user)
        {
            User myUser = new User();
            HMACSHA512 hmac = new HMACSHA512();
            myUser.Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
            myUser.PasswKey = hmac.Key;
            myUser.EId=user.EId;
            myUser.Empname = user.Empname;
            myUser.Role = user.Role;
            myUser.ManagerId = user.ManagerId;
            myUser.Email = user.Email;
            myUser.Mobile=user.Mobile;
            myUser.Age=user.Age;
            myUser.Region=user.Region;
            SqlCommand cmd = new SqlCommand("proc_register", conn);
            cmd.CommandType = CommandType.StoredProcedure;
           // cmd.Parameters.AddWithValue("@uid", myUser.EId);
            cmd.Parameters.AddWithValue("@un", myUser.Empname);
            cmd.Parameters.AddWithValue("@upass", myUser.Password);
            cmd.Parameters.AddWithValue("@ukey", myUser.PasswKey);
            cmd.Parameters.AddWithValue("@urole", myUser.Role);
            cmd.Parameters.AddWithValue("@umid", myUser.ManagerId);
            cmd.Parameters.AddWithValue("@ue", myUser.Email);
            cmd.Parameters.AddWithValue("@um", myUser.Mobile);
            cmd.Parameters.AddWithValue("@ua", myUser.Age);
            cmd.Parameters.AddWithValue("@ur", myUser.Region);
            conn.Open();
            int result = await cmd.ExecuteNonQueryAsync();
            conn.Close();
            if (result == 0)
                return null;
            user.Password = "";
            user.Token = _tokenService.GenerateToken(user);
            return user;
        }
    }
}