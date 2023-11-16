using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCTest.Repositories.Mapper
{
    public interface IMapper
    {
         List<T> ConvertToList<T>(DataTable dt);
        T ConvertToObject<T>(DataTable dt);
    }
}
