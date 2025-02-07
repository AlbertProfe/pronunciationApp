# Import CSV to H2

> To test the H2 database CSV import functionality with a basic CSV file for a UserApp object, follow these steps:

1. Create a CSV file named `users.csv` with the following content:

```
id,username,email,created_at
1,john_doe,john@example.com,2025-01-24 20:00:00
2,jane_smith,jane@example.com,2025-01-24 20:15:00
3,bob_johnson,bob@example.com,2025-01-24 20:30:00
```

2. Save this file in a location accessible to your H2 database, for example, `/path/to/users.csv`.

3. Connect to your H2 database and execute the following SQL command:

```sql
CREATE TABLE UserApp AS SELECT * FROM CSVREAD('/path/to/users.csv');
```

This command will create a new table named `UserApp` with columns matching the CSV file structure.

4. To verify the import, you can run a SELECT query:

```sql
SELECT * FROM UserApp;
```

This should display the imported data from the CSV file.

> **Note** that the H2 database will automatically infer the column types based on the data in the CSV file[2]. In this case, `id` will likely be treated as an INTEGER, while `username` and `email` will be VARCHAR, and `created_at` will be TIMESTAMP.
