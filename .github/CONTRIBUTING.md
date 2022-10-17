# Discowin ReImagined
## How to contribute to this Project?
**Please take a note:**
For major changes, please open an issue first to discuss what you would like to change.
<br/><br/>

### **1. Fork this repository**
Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account. <br/>
![image](https://user-images.githubusercontent.com/40418196/177019964-cd99535e-6be4-4bbe-926a-671993e4c096.png) <br/>
<br/>

### **2. Clone this Repository.**
click on the code button and then click the copy to clipboard icon.  <br/>
Open a terminal and run the following git command: <br/>

  ```
    git clone "url you just copied"   
  ```  
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.  <br/>

copy URL to clipboard. <br/>
For example:  <br/>

  ```
    git clone https://github.com/DarkPhoenix2704/discowin-reimagined.git
   ```
<br/>
<br/>

### **3. Create new Branch.**

Change to the repository directory on your computer (if you are not already there): <br/>
  ```
  cd discowin-reimagined/
  ```
check the current branch by running this command: <br/>
  ```
    git branch --show-current
  ``` 
if you were still in branch `main` , then create a new branch by running the following git command: <br/>
  ```
    git checkout -b "branch name"
  ``` 
For example: <br/>
  ```
    git checkout -b feat/dashboard
  ``` 
  <br/>
  <br/>

### **4. Commit and Push Changes.**
Finally!! after you make some changes needed, its time to commit your changes and push it to remote. <br/>
Before you push your changes, please make sure there is no changes have not commit in the current branch by running the following git command: <br/>
  ```
    git status
  ``` 
If there is any changes have not commit yet, then run : <br/>
  ```
    git add <file_name>
  ```
Then commit the changes with `git commit -m "your_comment_for_the_changes"` <br/>

Now update the current `branch` to make sure is up to date with `main branch` by running the following git command: <br/>
  ```
    git fetch origin main:main
  ``` 

Then run `git rebase origin main` to apply or update the `current branch` with `master branch`, like this picture below: <br/>
  ```
    git rebase origin main
  ``` 
  
After that push all your commit, by running the following git command: <br/>
  ```
    git push origin --force-with-lease
  ```  
  <br/>
  <br/>

### **5. Submit Your changes for review.**
If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button. <br/>
![Screenshot from 2022-07-03 07-12-55](https://user-images.githubusercontent.com/40418196/177019840-b1a19e48-bfe2-4fbf-a43d-9153b0ff41fd.png)<br/>
Now submit the pull request.
![Screenshot from 2022-07-03 07-13-17](https://user-images.githubusercontent.com/40418196/177019860-4cf92455-7f13-40dd-9fe2-44b55e6058b7.png)
