# Discowin ReImagined
## How to contribute to this Project?

### **1. Fork this repository**
Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account. <br/>
![image](https://user-images.githubusercontent.com/40418196/177019964-cd99535e-6be4-4bbe-926a-671993e4c096.png) <br/>
Credit images: <br/>

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
    git clone https://github.com/angellee177/MC3_Itungin.git
   ```

### **3. Create new Branch.**

Change to the repository directory on your computer (if you are not already there): <br/>
  ```
  cd first-contributions
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
  
### **4. Commit and Push Changes.**
Finally!! after you make some changes needed, its time to commit your changes and push it to remote. <br/>
Before you push your changes, please make sure there is no changes have not commit in the current branch by running the following git command: <br/>
  ```
    git status
  ``` 
![image](https://user-images.githubusercontent.com/40418196/177019327-6196e58d-5b2b-4b42-b747-0dd560723f0d.png) <br/>
   As you can see above the picture, all changes already commit. <br/>
If there is any changes have not commit yet, then run : <br/>
  ```
    git add <file_name>
  ```
Then commit the changes with `git commit -m "your_comment_f0r_the_changes"` <br/>
Now update the current `branch` to make sure is up to date with `main branch` by running the following git command: <br/>
  ```
    git fetch origin main:main
  ``` 
![image](https://user-images.githubusercontent.com/40418196/177019400-1b2d3014-9c93-4087-a7ea-6cd26d610134.png) <br/>
Then run `git rebase origin main` to apply or update the `current branch` with `master branch`, like this picture below: <br/>
  ```
    git rebase origin main
  ``` 
For example: <br/>
![image](https://user-images.githubusercontent.com/40418196/177019492-84f563c9-a2f3-4cc7-805d-9c39d8633a55.png) <br/>
After that push all your commit, by running the following git command: <br/>
  ```
    git push origin --force-with-lease
  ``` 
Like this picture below: <br/>
![image](https://user-images.githubusercontent.com/40418196/177019566-269e07fa-a326-43a3-8a40-67434cea5823.png) <br/>

### **5. Submit Your changes for review.**
If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button. <br/>
![Screenshot from 2022-07-03 07-12-55](https://user-images.githubusercontent.com/40418196/177019840-b1a19e48-bfe2-4fbf-a43d-9153b0ff41fd.png)<br/>
Now submit the pull request.
![Screenshot from 2022-07-03 07-13-17](https://user-images.githubusercontent.com/40418196/177019860-4cf92455-7f13-40dd-9fe2-44b55e6058b7.png)
