22/05/2023
Services:

I have some data in one component and I want to use that data in another component. That time
services came into picutre.
Service is a class with a specific purpose.
  1.Sharing data between components
  2. Implement application logic - When user enters the DOB, we need to write the function 
to find the age, this is not shown in the ui, This os reusable for other components as well.
  3. External Interaction.(connecting to the DB)
It should saved as .service.ts

-----------------------------------------------------------------

Dependency Injection:
1. Code without Dependency Injection - drawbacks
2. DI as design pattern(how it overcome the drawbacks)
3. DI as framework(angular provides)

DI is a coding pattern in which class will receive the dependencies from the external sources
rather than creating them itself.


How it works:
 1. Define the Service class
 2. Register with Injector 
 3. Declare the service as dependency in respective components.
----------------------------------------------------------------
23/05/2023
Using a service:
Always register the service in app component. 
Add that service in the app.module.ts and add that named import inside the providers array.
Step1: Create the service file, then there define the variable for array that must return in function, then
2. wherever we needed , there import the service file, and inside constrcutor, use private and 
create instance for the employeeservice, then there assign that to the variable or array
and then use the instance . that method in service file.

@injectable decorator is used to send data from one service file to another service file.
@Injectable({  //this tells this is service file not a normal class})
---------------------------------------------------------------------------------------
HTTP and Observables: nothing but http response that receive synchrounously.
1. Observable means a sequence of items that arrive synchrounously over time.
2. HTTP call - single line
3. single item - HTTP response

RxJS: Reactive extension of Javascript
External library to work with observables.