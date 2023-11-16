using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MVCTest.DTO;
using MVCTest.DataAccessLayer;
using MVCTest.DataAccessLayer.Data;
using MVCTest.DTO.Models;
using MVCTest.Repositories.Mapper;

namespace MVCTest.Repositories.ProfileRepository
{
    public class ProfileRepository : IProfileRepository
    {
        private IDataBuilder _dataBuilder;
        private IMapper _mapper;
        public ProfileRepository(IDataBuilder dataBuilder,IMapper mapper)
        {
            _dataBuilder = dataBuilder;
            _mapper = mapper;


        }

        public int AddProfile(Profiles profiles)
        {
           return _dataBuilder.AddProfiles(profiles);
        }

        public int AddTask(Tasks tasks)
        {
            return _dataBuilder.AddTasks(tasks);
        }

        public int DeleteProfile(int Id)
        {
            return _dataBuilder.DeleteProfiles(Id);
        }

        public int DeleteTask(int Id)
        {
            return _dataBuilder.DeleteTasks(Id);
        }

        public Profiles GetProfileById(int Id)
        {
            var ds = _dataBuilder.GetProfileById(Id);
            Profiles profiles = _mapper.ConvertToObject<Profiles>(ds);
            return profiles;
        }

        public Tasks GetTaskById(int Id)
        {
            var ds = _dataBuilder.GetTaskById(Id);
            Tasks tasks = _mapper.ConvertToObject<Tasks>(ds);
            return tasks;
        }

        public List<Tasks> GetTasks()
        {
            var ds = _dataBuilder.GetTasks();
            List<Tasks> tasks = _mapper.ConvertToList<Tasks>(ds);
            return tasks;
        }

        public int UpdateProfile(Profiles profiles)
        {
            return _dataBuilder.UpdateProfiles(profiles);
        }

        public int UpdateTask(Tasks tasks)
        {
            return _dataBuilder.UpdateTasks(tasks);
        }

        List<Profiles> IProfileRepository.GetProfiles()
        {
            var ds = _dataBuilder.GetProfiles();
           List<Profiles> profiles= _mapper.ConvertToList<Profiles>(ds);
           return profiles;
        }
    }
}
