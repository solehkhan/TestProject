using TestApi.Models;

namespace TestApi.Repositories
{
    public interface ICustomer
    {
        Task<IList<CustomerModel>> GetAll();
        Task<CustomerModel> GetCustomerById(int id);

        Task<bool> AddCustomer(CustomerModel model);

        Task<bool> UpdateCustomer(string id,CustomerModel model);

        Task<bool> DeleteCustomer(string id);

    }
}
