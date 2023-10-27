using System.Collections.Generic;
using System.IO;
using System.Reflection.Metadata.Ecma335;
using Newtonsoft;
using Newtonsoft.Json;
using TestApi.Models;
using static System.Net.WebRequestMethods;

namespace TestApi.Repositories
{
    public class Customer : ICustomer
    {
        static HttpClient client = new HttpClient();

        public async Task<bool> AddCustomer(CustomerModel model)
        {
            string path = "https://getinvoices.azurewebsites.net/api/Customer";
            
            var jsonmode = JsonConvert.SerializeObject(model);

            HttpResponseMessage response = await client.PostAsJsonAsync(path, jsonmode);
            response.EnsureSuccessStatusCode();

            if (response.IsSuccessStatusCode)
            {
                return true;
            }
            else 
            {
                return false;
            }            
        }

        public async Task<bool> DeleteCustomer(string id)
        {
            string path = $"https://getinvoices.azurewebsites.net/api/Customer/{id}";
            HttpResponseMessage response = await client.DeleteAsync(path);
            if (response.IsSuccessStatusCode)
            {
                return true;
            }
            else 
            {
                return false;
            }
            
        }

        public async Task<IList<CustomerModel>> GetAll()
        {
            string path = "https://getinvoices.azurewebsites.net/api/Customers";
            string str = "";
            IList < CustomerModel > customerCollection = null;
            HttpResponseMessage response = await client.GetAsync(path);

            if (response.IsSuccessStatusCode)
            {
                str = await response.Content.ReadAsStringAsync();
                customerCollection = JsonConvert.DeserializeObject<IList<CustomerModel>>(str);

            }
           

            return customerCollection;

        }

        public async Task<CustomerModel> GetCustomerById(int id)
        {
            string path = $"https://getinvoices.azurewebsites.net/api/Customer/{id}";
            string str = "";
            CustomerModel customerCollection = null;
            HttpResponseMessage response = await client.GetAsync(path);

            if (response.IsSuccessStatusCode)
            {
                str = await response.Content.ReadAsStringAsync();
                customerCollection = JsonConvert.DeserializeObject<CustomerModel>(str);

            }


            return customerCollection;
        }

        public async Task<bool> UpdateCustomer(string id,CustomerModel model)
        {
            string path = $"https://getinvoices.azurewebsites.net/api/Customer/{id}";
            HttpResponseMessage response = await client.PutAsJsonAsync(path, model);
            response.EnsureSuccessStatusCode();

            response.EnsureSuccessStatusCode();

            if (response.IsSuccessStatusCode)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
