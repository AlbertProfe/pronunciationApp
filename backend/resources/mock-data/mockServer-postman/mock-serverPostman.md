# How to create a mock server in Postman from a collection?

> Mock servers simulate real API behavior and are useful for testing and development without relying on live APIs.

## Reference

- https://86c6ea23-f1a9-4a53-85a9-9c9869d64809.mock.pstmn.io/api/words/

- [Configure and use a Postman mock server | Postman Docs](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)

## Step-by-step



To create a mock server in Postman from a collection, follow these steps:

1. **Select the Collection**:
   
   - In the Postman sidebar, go to **Collections**.
   - Find the collection you want to mock, click **View more actions** (three dots), and select **Mock Collection**.

2. **Configure Mock Server Details**:
   
   - Provide a name for your mock server.
   - (Optional) Choose an environment to use environment variables with your mock server.
   - Decide whether to make the mock server private or public. Private servers require an API key in the request header.
   - Optionally, simulate a fixed network delay by specifying a response delay.

3. **Create the Mock Server**:
   
   - Click **Create Mock Server** to finalize the setup.
   - Postman will display the mock server URL, which can be used in requests.

4. **Add Examples to Requests**:
   
   - Ensure that each request in your collection has at least one saved example. Postman uses these examples to generate responses for mock requests.

5. **Use the Mock Server**:
   
   - Copy the mock server URL and use it in your API requests.
   - If the server is private, include your Postman API key as an `x-api-key` header.

6. **Edit or Delete Mock Servers**:
   
   - To edit, go to **Mock Servers** in the sidebar, select the desired server, and click **Edit Configuration**.
   - To delete, click **View more actions** next to the server name and select **Delete**.

Citations:
[1] https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/
