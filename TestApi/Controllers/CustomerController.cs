using Microsoft.AspNetCore.Mvc;
using TestApi.Models;
using System.Text.Json;
using TestApi.Repositories;
using System.Reflection;

namespace TestApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        ICustomer _Customer;
        IList<CustomerModel> customerModels;
        CustomerModel CustomerModel;
        public CustomerController(ICustomer customer)
        {
            _Customer = customer;
        }
        [HttpGet("GetAllCustomer")]

        public async Task<ActionResult> GetCustomers()
        {
            try
            {
                customerModels = await _Customer.GetAll();

                if (customerModels == null)
                {
                    return NotFound();
                }

            }
            catch (Exception ex)
            {

            }
            return Ok(customerModels);
        }

        [HttpGet("{CustomerId}")]
        public async Task<ActionResult> GetCustomerById(int CustomerId)
        {
            try {

                CustomerModel = await _Customer.GetCustomerById(CustomerId);
                if (CustomerModel == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {

            }
            return Ok(CustomerModel);
        }


        [HttpPost("AddCsutomer")]
        public async Task<ActionResult> AddCustomer(CustomerModel model)
        {
            try
            {
                if (await _Customer.AddCustomer(model))
                {
                    return Ok();
                }

            }
            catch (Exception ex)
            {

            }

            return BadRequest();

        }
        [HttpPut("UpdateCustomer/{id}")]
        public async Task<ActionResult> updateCustomer(string id, CustomerModel model)
        {
            if (id != model.id)
            {
                return BadRequest();
            }
            try
            {
                if (await _Customer.UpdateCustomer(id, model))
                {
                    return Ok();
                }

            }
            catch (Exception ex)
            {

            }

            return BadRequest();


        }

        [HttpDelete("DeleteCustomer/{id}")]
        public async Task<ActionResult> DeleteCustomer(string id) 
        {
            
            try
            {
                if (await _Customer.DeleteCustomer(id))
                {
                    return Ok();
                }

            }
            catch (Exception ex)
            {

            }

            return BadRequest();

        }
    }
}
