using MVCTest.DTO.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCTest.DataAccessLayer.Data
{
    public class DataBuilder: IDataBuilder
    {

        private static SqlConnection _sqlConnection;

        public DataBuilder()
        {

            _sqlConnection = new SqlConnection("Server=localhost\\SQLEXPRESS;Database=MVCTask;Integrated Security=SSPI;Trusted_Connection=True;");
        }

        public int AddProfiles(Profiles profiles)
        {

            DataSet ds = new DataSet();
            SqlCommand cmd = new SqlCommand("sp_CreateProfile", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@FirstName", profiles.First_Name);
            cmd.Parameters.AddWithValue("@LastName", profiles.Last_name);
            cmd.Parameters.AddWithValue("@Date_of_Birth", profiles.Date_of_Birth);
            cmd.Parameters.AddWithValue("@PhoneNumber", profiles.Phone_Number);
            cmd.Parameters.AddWithValue("@Email", profiles.Email_Id);
            _sqlConnection.Open();
          var result =  cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }

        public int AddTasks(Tasks tasks)
        {
            
            SqlCommand cmd = new SqlCommand("sp_CreateTask", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Profile_Id", tasks.Profile_Id);
            cmd.Parameters.AddWithValue("@Task_Name", tasks.Task_Name);
            cmd.Parameters.AddWithValue("@Task_Description", tasks.Task_Description);
            cmd.Parameters.AddWithValue("@Start_Time", tasks.Start_Time);
            cmd.Parameters.AddWithValue("@Status", tasks.Status);
            _sqlConnection.Open();
            var result = cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;

        }

        public int DeleteProfiles(int Id)
        {
            SqlCommand cmd = new SqlCommand("sp_DeleteProfile", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Profile_Id",Id);
            _sqlConnection.Open();
            var result = cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }

        public int DeleteTasks(int Id)
        {
            SqlCommand cmd = new SqlCommand("sp_DeleteTask", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Task_Id", Id);
            _sqlConnection.Open();
            var result = cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }

        public DataTable GetProfileById(int Id)
        {
            DataSet dataSet = new DataSet();
            SqlCommand cmd = new SqlCommand("sp_GetProfileById", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Profile_Id", Id);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dataSet);
            return dataSet.Tables[0];
        }

        public DataTable GetProfiles()
        {

            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter("sp_GetProfiles", _sqlConnection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.Fill(dt);

            return dt;
        }

        public DataTable GetTaskById(int Id)
        {
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("sp_GetTaskById", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Task_Id", Id);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            return dt;

        }

        public DataTable GetTasks()
        {
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter("sp_GetTasks", _sqlConnection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.Fill(ds);

            return ds.Tables[0];
        }

        public int UpdateProfiles(Profiles profiles)
        {
            SqlCommand cmd = new SqlCommand("sp_UpdateProfile", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Profile_Id", profiles.Id);
            cmd.Parameters.AddWithValue("@FirstName", profiles.First_Name);
            cmd.Parameters.AddWithValue("@LastName", profiles.Last_name);
            cmd.Parameters.AddWithValue("@Date_of_Birth", profiles.Date_of_Birth);
            cmd.Parameters.AddWithValue("@PhoneNumber", profiles.Phone_Number);
            cmd.Parameters.AddWithValue("@Email", profiles.Email_Id);
            _sqlConnection.Open();
            var result = cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }

        public int UpdateTasks(Tasks tasks)
        {
            SqlCommand cmd = new SqlCommand("sp_UpdateTask", _sqlConnection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Task_Id", tasks.Id);
            cmd.Parameters.AddWithValue("@Profile_Id", tasks.Profile_Id);
            cmd.Parameters.AddWithValue("@Task_Name", tasks.Task_Name);
            cmd.Parameters.AddWithValue("@Task_Description", tasks.Task_Description);
            cmd.Parameters.AddWithValue("@Start_Time", tasks.Start_Time);
            cmd.Parameters.AddWithValue("@Status", tasks.Status);
            _sqlConnection.Open();
            var result = cmd.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }
    }
}
