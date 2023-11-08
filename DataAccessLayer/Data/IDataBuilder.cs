using MVCTest.DTO.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCTest.DataAccessLayer.Data
{
    public interface IDataBuilder
    {
        DataTable GetProfiles();
       DataTable GetTasks();

       int AddProfiles(Profiles profiles);
        int AddTasks(Tasks tasks);
        int UpdateProfiles(Profiles profiles);
        int UpdateTasks(Tasks tasks);
        int DeleteProfiles(int Id);
        int DeleteTasks(int Id);
        DataTable GetProfileById(int id);
        DataTable GetTaskById(int id);
    }
}
