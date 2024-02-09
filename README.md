# Recipe-App

### - Token authentication.

### - Test Driven Development.

### - Add, Edit, Remove Recipe.

# How to Run()

### 1. Download as zip or clone the repository.

```
git clone https://github.com/mahadi025/recipe-app
```

### 2. Go to the directory and run:

```
docker-compose build
```

### 3. Create a superuser:

```
docker-compose run --rm api sh -c "python manage.py createsuperuser"
```

### 4. If you change any schema make sure to run:

```
docker-compose run --rm api sh -c "python manage.py makemigrations"
```

### 5. If you want to test then run:

```
docker-compose run --rm api sh -c "python manage.py test"
```

# How to use()

### 1. Go to the directory and run:

```
docker-compose up
```

### 2. Then go to the 127.0.0.1:8000/api/docs from the browser to see the endpoints.

### 3. After that create a user "/api/user/create/".

### 4. Generate and copy the token from "/api/user/token/".

### 5. Go tp the top of the page and click "Authorize". On tokenAuth section type "Token" then your token from the previous step.

- Example : Token c19656fcf760b70ce2dc101ab285a55737a0fbe1

### 6. With the authorization now you can create, edit, and delete a recipe, tags, and ingredients.

- You don't need to authorize to view the recipes. But if you need to edit or create a recipe then you need to authorize with the same user that created the recipe.

# DockerHub

```
docker pull mahadi025/recipe-app-api
```
