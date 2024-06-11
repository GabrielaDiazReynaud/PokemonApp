## Pokémon App Features

This Pokémon app includes the following features:

### 1. Look Up Pokémon by ID and Name

Users can search for Pokémon by their ID or name using the search functionality provided in the app. Simply enter the ID or name of the Pokémon in the search bar, and the app will display the corresponding Pokémon details if found.

### 2. Filter Pokémon by Generations

Users can filter Pokémon by generations using the filter feature provided in the app. Select the desired generations from the dropdown menu, and the app will display only the Pokémon from that specific generation.

### 3. Display All Pokémon by Default

By default, the app displays all Pokémon available in the database. Users can explore the entire list of Pokémon without any filters applied.

## Installing Project in Local Machine

### Step 1: Clone Repository

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/username/project-name.git
   ```

   Replace `username` with the GitHub username of the repository owner and `project-name` with the name of the repository.

### Step 2 : Navigate to the Project Directory

1. Navigate to the directory of the cloned repository.

   ```bash
   cd project-name
   ```

   Replace `project-name` with the name of the cloned repository directory.

### Step 3: Install Project Dependencies

1. Install project dependencies by running:

   ```bash
   npm install
   ```

## Run Project in Local Machine

### Prerequisites: Have the project installed on local machine

### Step 1: Navigate to the Project Directory

1. Navigate to the directory of the project.

   ```bash
   cd project-name
   ```

   Replace `project-name` with the name of the project directory.

### Step 2: Start the Development Server

1. Start the development server by running:

   ```bash
   npm run start
   ```

##Deployment

### Prerequisites:Create a New Repository on GitHub

#### Step 1: Go to [GitHub](https://github.com) and create a new repository.

#### Step 2: Initialize the Git Repository Locally

1. Open your terminal or command prompt.
2. Navigate to the root directory of your project.

   ```bash
   cd path/to/your/project
   ```

3. Initialize a new Git repository.

   ```bash
   git init
   ```

#### Step 3: Add and Commit Your Project Files

1. Add all your project files to the staging area.

   ```bash
   git add .
   ```

2. Commit the files to the repository with a commit message.

   ```bash
   git commit -m "Initial commit"
   ```

#### Step 4: Link the Local Repository to GitHub

1. Copy the URL of your new repository from GitHub. It should look like `https://github.com/username/repository-name.git`.
2. Add the remote URL to your local repository.

   ```bash
   git remote add origin https://github.com/username/repository-name.git
   ```

#### Step 5: Push Your Changes to GitHub

1. Push your local repository to GitHub.

   ```bash
   git push -u origin master
   ```

###Deploy to GitHub Pages

#### Step 1: Install `gh-pages` Package

1. In your terminal, navigate to the root directory of the Pokemon application Install the `gh-pages` package by running:

   ```bash
   npm install gh-pages --save-dev
   ```

#### Step 2: Configure `package.json`

1.Open the `package.json` file. Add the following fields at the top level:

```json
"homepage": "https://yourusername.github.io/repositoryname",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

#### Step 3: Deploy to GitHub Pages

1. In your terminal, run the following command to deploy the Pokemon application:
   ```bash
   npm run build
   npm run deploy
   ```
