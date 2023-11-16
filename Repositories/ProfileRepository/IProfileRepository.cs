using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MVCTest.DTO.Models;
using MVCTest.DataAccessLayer;


namespace MVCTest.Repositories.ProfileRepository
{
    public interface IProfileRepository
    {
        List<Profiles> GetProfiles();
        List<Tasks> GetTasks();
        int AddProfile(Profiles profiles);
        int AddTask(Tasks tasks);

        int UpdateProfile(Profiles profiles);
        int UpdateTask(Tasks tasks);

        Profiles GetProfileById(int Id);
        Tasks GetTaskById(int Id);
        int DeleteProfile(int Id);
        int DeleteTask(int Id);
    }
}
