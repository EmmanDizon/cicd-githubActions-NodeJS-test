# cicd-githubActions-NodeJS-test
Sample CI/CD with GitHub Actions and Node.js for checking if unit tests pass

## Project Structure
- `server.js` - Express server with a simple GET `/hello` endpoint
- `server.test.js` - Jest unit tests for the endpoint
- `.github/workflows/testing.yml` - GitHub Actions workflow for automated testing

## Setup

### Prerequisites
- Node.js (v24.x)
- npm

### Installation
```bash
npm install
```

## Running the Application

### Start the server
```bash
npm start
```
The server will run on `http://localhost:3000`

### Test the endpoint
```bash
curl http://localhost:3000/hello
```
Expected response: `{"message":"Hello, World!"}`

## Running Tests
```bash
npm test
```

## CI/CD Pipeline

The project uses GitHub Actions to automatically run tests on pull requests.

### Workflow
1. Triggered on every pull request
2. Installs dependencies
3. Runs unit tests
4. Blocks merge if tests fail (when branch protection is enabled)

### Branch Protection Setup
To prevent merging PRs with failing tests:
1. Go to **Settings → Branches** in GitHub
2. Add rule for `develop` branch
3. Enable "Require status checks to pass before merging"
4. Select the `tests` status check
5. Save changes

## Development Workflow
1. Create a new branch: `git checkout -b feature-branch`
2. Make changes and commit: `git commit -m "Your message"`
3. Push branch: `git push origin feature-branch`
4. Create a pull request on GitHub
5. Wait for tests to pass
6. Merge when approved and tests pass
