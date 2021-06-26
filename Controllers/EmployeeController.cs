using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactApp_SendingAPIto_CoreAPI_VP2019.Controllers
{
	[Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
		[HttpPost]
		public bool Post(Employee employee)
		{
			return true;
		}
	}

	public class Employee
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Location { get; set; }
		public float Salary { get; set; }
	}
}