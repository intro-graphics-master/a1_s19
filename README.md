# Assignment #1: Environment Setup

## Becoming a JavaScript Programmer who knows how to use DevTools

### Preliminary Step: Learning JavaScript

If you're coming from a C++ background, you might find [this slide set](https://docs.google.com/presentation/d/e/2PACX-1vSVw1BycQjqBWq_7tbkDE9N8WJXZAketdkrtnL3WkSVj2oM4PP8P05L1dQ8pdxwBkkhXqJGau3k7yCA/pub?start=false&loop=true&delayms=3000) useful.  It points out all the key differences to be aware of in your transition to JavaScript.

### Step 1:  Begin with these steps to repository setup:

1. By now you have followed the link to create your assignment repository. Please use this link only once as it will create a repository on GitHub.com.  We will not check for submissions if you use it multiple times. The repository name should look like **a1-githubusername**. Any others will get removed.

2. As part of this process you will also receive an invite from GitHub to join the class organization which is where some more of your class assignments and term project will live.

3. Once your repository is created you will have a copy of the assignment code in your GitHub.com repository.  That page is probably what you're reading right now.  Find the big green button on top of the page (this page) that says "Clone or download". Now you can clone the repository onto your local computer.  There are three ways to do this:

* The easy way (not for extra credit): Click that green button and select "Download ZIP".

* The medium way:  (extra credit) Click that green button on your repository and select "Open in Desktop".  Let it download the program "GitHub Desktop" for you if you don't already have it, and then the "Open in Desktop" button should open in that program.

   * If it works, this entire repository will be copied to a folder on your computer in a way that Git can manage.  The extra credit section at the bottom of this assignment will assume that you've done this part.

   * Git is a software version control tool that comes from the Linux world. It is primarily a command line tool, but GitHub Desktop provides a nice visual experience for it.  If you have trouble setting up GitHub Desktop, [Professor Friedman's tutorial on it](https://docs.google.com/document/d/e/2PACX-1vQB9LOnRJ5MdhIClifZwsT9UmFmz3EpP0AsI1oEjJ7gqshA7nqbEsUtzgRqyoFAbCBUzoe0lLtEelMD/pub) might help.

* The hard way:  Just use git (the command line) rather than GitHub Desktop if you are comfortable with that.  Be sure to setup your local git environment and ssh keys to work with the GitHub site, by following their instructions. Use the following command. Be sure do execute this command from the directory you wish to locate your work.

```bash
$ git clone git@github.com:intro-graphics-master/a1-githubusername.git
```

4. You can now follow the remaining steps of the assignment.

### Step 2:  Now follow these steps to run and modify your project:

1. Go to your folder.

   ![icons](docs/image-01.png)

2. You should see the file index.html in your folder.  That's the executable.  If you have worked with HTML before, you might recall that simply double clicking .html files opens them in a web browser and sometimes displays a working document.  That won't work with this file, because our graphics programs will also depend on other files (JavaScript modules, image files, sound files, 3D models, etc.)  Your web browser protects your computer by refusing to look into your local file system, so we will have to trick it into thinking it is looking at a remote file system (a server) instead.

3. Run a fake server. which lacks those security protections.  Do this by opening the file we gave you called "host" -  "host.bat" if you're Windows, "host.command" if your Mac. On Windows you can just double click the file open.
   * **On Mac, you might get a security warning if you double-click.**  Instead, right click the files (that's correct - right click.  It matters how you click!)  Then choose Open, or you can go into System Preferences/Security & Privacy/General and click 'Open Anyway'. Let us know if it still doesn't work.

   ![dialog](docs/image-03.png)

4. Look in the resulting console window.  If the console window immediately disappeared, or if you can't find a message in it starting with "Serving HTTP on ...", your operating system might not have come with Python; go download and install that first -- use Google for help on that, then try our files again.

   ![http server](docs/image-04.png)

5. Now you're hosting. Keep that window open.

6. Open a new window of the Google Chrome web browser.  Download it if necessary.

   ![url bar](docs/image-05.png)

7. Navigate the browser to the url http://localhost:8000/
That assumes that step 5's message said port 8000 - otherwise change the number in the URL to match.

8. Observe that your project shows up at this new URL.  That's where you'll access it from now on.

   ![triangle](docs/image-02.png)

9. It's running now!  Even actual web developer jobs really do involve keeping this kind of fake server open to be able to work on files locally. **Keep that .bat or .command program open while you work.**

## Part II: Editing a JavaScript Project

We can now run our project, and we could also edit any of its files because they're in plain text.  That type of editing is not enough for this class, though, because fixing errors in a graphics program is so hard that it warrants some more tools.

The rest of these instructions will focus on the web browser Google Chrome.  We use Chrome instead of Firefox because it has all the features we need and there's only room to cover one web browser.

The focus on a web browser is because these instructions assume that you have never used a browser's "developer tools" (DevTools) before, and need help finding all of their features.

Most importantly, you will use the DevTools for debugging your program -- running it in a way that reports what is inside of each JavaScript variable so that your errors are much easier to understand.  Debuggers give you all of the special tools like breakpoints, single-stepping, the call stack, and other features you may have found in C++ environments like Visual Studio or XCode.  In graphics, you will need all the debugging tools you can get, because otherwise the default failure mode of a graphics program would be an unhelpful blank screen.

These instructions will show you use the same program for editing and reading JavaScript as you use for running it.  Just Google Chrome!  We won't need an external editor.  This isn't usually recommended because Chrome's editor doesn't support very many things, but here's why we're doing it anyway:

* To show that Chrome by itself can do it.
* To give a more focused tour of Chrome DevTools.
* To make sure the DevTools window is always open while editing
* To make it harder for JavaScript newcomers to ignore or close the debugger panel, which is crucial for dealing with errors.

In reality, most professional JavaScript programmers right now use external text editors like the immensely popular VSCode to manage JavaScript projects.  Unlike Chrome's DevTools, VSCode supports plugins.  With plugins, VSCode can automatically do the process we just did in step 2 (setting up a Python host, and launching our .html page).  Other plugins let VSCode directly interact with our browser debugger, so we wouldn't be missing that either.  Others help you type better JavaScript.  You can tell that VSCode offers a lot more than Chrome by itself; it just has a slightly higher setup cost and this tutorial is ONLY about learning where to find things in web browser tools.

### Step 3:  Continue the next steps to begin viewing the code.  

1. Let's find the text editor inside of Chrome. 

2. Resume with the open Chrome window from the previous step 8.

3. Press F12 (Windows) or Cmd+Option+i (Mac) to open the Chrome developer tools panel (DevTools).

   ![triangle code](docs/image-06.png)
   
4. You want DevTools to be able to take up the whole screen.  Undock it from your web page window.  Do this by clicking the ellipsis at the upper right corner, and selecting the first choice under "Dock Side".

   ![triangle code 2](docs/image-07.png)

5. Maximize both your web page window and DevTools windows.  Use the keyboard shortcut Alt+tab (Windows) or Cmd+~ (Mac) to switch between them quickly.

6. Open up the "Sources" tab of the DevTools panel, towards the top of the screen.  That's for viewing JavaScript code.

   ![menu bar](docs/image-08.png)

7. Without leaving the "Sources" outer tab, look at the navigator panel on the left.  This might be collapsed in the upper corner.  Once it's there, open the "Page" inner tab underneath it.

   ![navigator](docs/image-09.png)

8. You should see all the files you downloaded from GitHub here.  Click them open to make sure you can see the code.  Now you can read it all here.

   ![url bar](docs/image-10.png)

9. Press F1 to open settings, and choose "Default indentation: 2 spaces".  Close settings.
   * This is just so you won't be prevented from matching our formatting.

These steps, and the following ones, may seem like a lot of work but they are part of becoming a real web developer with a good workflow, as opposed to someone who just knows the JavaScript language.  The biggest key of all to becoming a good developer is actually going be mastering the **debugger** feature, but first let's set up our editor.


### Step 4:  Continue the next steps to begin modifying:

So far we can read through the JavaScript files but we can't save edits to them (edits will be deleted upon refresh).  That is because we tricked Chrome with a fake web server (it doesn't even know where our files can be found on our real filesystem).  We have to tell it how to match up our fake "remote" files to our real files.  Chrome calls this setting up a "workspace".

1. Change from the "Page" inner tab to the "Filesystem" inner tab, which might be collapsed behind the arrow.  This one should be empty.

   ![filesystem](docs/image-11.png)

2. Drag and drop your local file folder from your computer's folder navigator straight into the middle of the DevTools window.  Or, just use the manual "add folder to workspace" button and choose your folder.
Either way this will complete the mapping to your real local files.

   ![copy](docs/image-12.png)

   * It's going to ask you for permission to modify your local files.  Hit yes.
   
     ![allow](docs/image-13.png)
   
   * If this doesn't happen as described, try to find help on setting your local folder as a workspace.

     ![url bar](docs/image-14.png)

3. Observe the little green dots next to each file in the "Filesystem" subtab.  These green dots verify that your Chrome has matched your fake server to your local files.

4. Sometimes a green dot is missing -- especially on index.html.   That is dangerous; the file might not be mapped right and could be out of date.  When green dots are missing, hit ctrl+F5 (Windows) or cmd+F5 (Mac) to do a hard refresh.  This re-loads them from your local files and re-maps them again.

   ![reload](docs/image-15.png)

Fun fact:  For as long as you have DevTools open, back at browser window you have unlocked some new ways to refresh!  Right-click the refresh button to see them.

5. If the green dots still don't show up, delete what's in the workspace area and try again until they appear.  You should also delete all your Chrome Workspaces when you finish an assignment.  That way when your next assignment comes, Chrome won't accidentally still remember the mapping to these files, and fail to notice the new files, causing edits to your next assignment to seemingly disappear!

6. Now you can edit the files directly inside Chrome, in the DevTools "Sources" tab.
   * As long as you make changes under "Sources" and not "Elements", your changes will now persist in your own local files even after page refreshes.
   * You should avoid ever accidentally typing in the "Elements" tab.  That's only for temporary HTML stuff your code generates.

Editing directly in Chrome like this is the workflow we will use.  One reason is that your code immediately changes its behavior as you type.  Even when it's in the middle of running, or as soon as you un-pause it in the debugger.  WebGL shapes will move around immediately when you make changes to the function that draws them.  This allows you to you dynamically test new code without re-starting your whole animation and losing your place -- without having to wait for your timed scenes to progress to that point again -- or without having to enter the right inputs again.


### Step 5:  Continue the next steps to begin using Chrome as a code editor:

1. In order for Chrome to be better than crudely opening your code in notepad, you need to know what basic features to expect from a text editor.  Let's learn them.

2. Find and try each of the following code editing commands once. They're found in that DevTools Sources tab.
   * Block indent / unindent (Tab and Shift+Tab)
   * Block comment / uncomment (Ctrl+/ or Cmd+/)
     * For both of the above bullet points, try it on multiple highlighted lines at once.
   * Zoom in/out while reading
     * Hold down Ctrl (Windows) or Cmd (Mac) and then press plus, minus, or zero to adjust.
     * Use this fit a comfortable amount of code on-screen for you to read at once.
   * find (Ctrl+f or Cmd+f)
   * find-and-replace
   
     ![find and replace](docs/image-16.png)
     
      * "Find" works pretty good in Chrome's code editor.  You don't have to find specific or exact strings; Chrome supports matching **regular expressions**, for finding all text of a more general pattern.  That's the .* button.


#### Step 6:  Continue the next steps to complete assignment 1:

1. With our animation running in Chrome, with DevTools still open to the Sources tab.  Open the file "main-scene.js".  This is under the "Filesystem" tab of the navigator panel, which might be collapsed in the upper corner.

   ![code](docs/image-17.png)

2. If there's no green dot next to  "main-scene.js", fix it as described above.

3. The code is divided up into JavaScript classes.  The one at the top of the file constructs the geometry of a triangle.  Let's edit it to become a square.

   ![code](docs/image-18.png)

4. On line 17, add the following three items to that line's JavaScript array, which is all the text enclosed by square brackets [ ].  Add a comma to separate from previous items in the array.
   * vec3(0,1,0), vec3(1,0,0), vec3(1,1,0)

5. On line 18, add the following three items to the JavaScript array:
   * color(0,0,1,1), color(0,1,0,1), color(1,1,0,1)

6. Save the file (Ctrl+s or Cmd+s), verify the asterisk next to your filename for unsaved changes goes away, and reload the page.  Make it a hard reload (using Ctrl+Shift+r for Windows, Cmd+Shift+r for Mac) to clear out the cache, just in case the page tries to cache an older version of the file we edited.  Switch back to look at your web page window.  The triangle should be a square now, because you just attached a second triangle to it.  If so, your edit worked and your file is saved.  If not, check for green dots and fix it as per above.

   ![square](docs/image-19.png)

7. If you typed the wrong thing, you could get console errors, a blank web page, or missing triangles.  In the appendix below we'll show you how to use the debugger and the console together to approach errors in a smart way.  For now, just type it right.

8. Your files should be ready to turn in now, including your trivial change.


#### Step 7:  Continue the next steps to turn in assignment 1 on CCLE:

(10 points)

1.  Zip up all your files (except for the "docs" folder, and hidden ".git" folder) in a single .zip file, which you will name after your student UID.  Turn in your .zip on CCLE, where we will add a place to do so.  Always keep your .zip files small for us; please do not select the (sometimes huge) .git folder for inclusion in it!

Remember to visit [Appendix 2 (using a debugger)](https://docs.google.com/document/d/e/2PACX-1vSi14Mb-_6qLN7wVA4-4NxqYR-3qHLy7ndjB2G0Ba6TCYHn_KGmrPbu-fCDtHkv9QcGBNqLUUdT6fu1/pub) to complete this tutorial!  Only then can you get the full value out of using DevTools, like real JavaScript developers do.

#### Step 8 (Extra credit):  Continue the next steps to turn in assignment 1 on GitHub:

(10 bonus points)

1. This bonus step requires that you actually got GitHub Desktop (or just plain git) set up correctly to talk to your local files.  Do that.  Use the instructions provided by GitHub for setting up GitHub Desktop, and use Google for any help.

2. Once you have made the minor edit to your local files (from the steps above), all you have left to do is push them back to the GitHub repo you made in step 1.  This is easy using GitHub Desktop's interface.  Remember that committing your local files is not enough; you must also push them.  Visit your repository page online (accessible from the GitHub Desktop menus and keyboard shortcuts) and check the file contents to verify that your edit is there.

In case you decide you want to use plain git instead on the command line, here are instructions for that too: https://pastebin.com/YQimN4Mn

### Appendix 1:  Getting good at git

New to Git?  Want to understand what it does really, really well?

Start reading this [tutorial](https://git-scm.com/book/en/v2), at least through section 1.3.  It's very well written.  You only need a superficial understanding of the Git system to be able to use GitHub Desktop, which gives you nice easy buttons to do everything instead of command line tools.  Once you know the basics of what Git is (by reading at least that far), you're ready to try using this visual version of it and you'll be relieved at how little there is to it.

The benefits of using git for your development are many:  You'll be able to work on the same code as your teammates, you'll be able to easily identify what each teammate changed vs. what stayed the same, and you'll be able to view and roll back your code's history.

Another benefit of Git is that it can very, very seamlessly swap between multiple versions of the same code.  You select your alternate versions from a drop down, and immediately your files change in place to the other versions, right in your folder, even if they're not the same files at all.  You don't even have to close your program to do it, you can just keep running it and hit reload and suddenly your code is different!  This is breathtaking the first time you try it.

It turns out it's incredibly useful to do that.  You'll be able to start new "branches" if you're not sure you want to try something on your code.  Branches are very cheap to make and you can have lots of them, one for every feature you'd like to try implementing.  These allow you to experiment with and completely break your code while you try adding in a new piece or try doing a total redesign, yet being able to immediately switch back to a working version when you want to work on a different piece instead.  This coding practice is called "branch per feature" and it is very well regarded (example: https://dev.acquia.com/blog/pragmatic-guide-branch-feature-git-branching-strategy).

### Warning
#### for late in the course: Merging code with your teammates

 One thing that GitHub Desktop does not make obvious is how to merge edits from different branches.  When you try to merge code with your teammates, you might get an error message stating that there are "merge conflicts".  That's expected.  We won't say much about merge conflicts (refer to the tutorial above), but be aware of an important pitfall to watch out for:
 
 GitHub Desktop seems to have a bug.  To fix the merge conflict, GitHub Desktop might ask you to select an editor.  It doesn't always let you select one though, and seemingly refuses to merge branches until there is one.  If you experience this later on in the course, be aware that the trick is to just X out the window that says the merge couldn't be completed.  
 
 Now, you are free to edit your files anyway!  Your files have been merged together plus markup inserted for every "merge conflict", and it permits you to manually go in with your favorite editor (like Chrome) and delete this markup, along with the conflicting code you want to discard.  Once you've done that, the merge worked and you can commit your code.
 

### Appendix 2:  Using a debugger

#### When your code isn't working

Lastly, the part we've been building up to, using a JavaScript debugger while you code!

This part is so important that we have broken it off into another document so you can refer to it repeatedly during your more difficult course projects.  Visit it here:

https://docs.google.com/document/d/e/2PACX-1vSi14Mb-_6qLN7wVA4-4NxqYR-3qHLy7ndjB2G0Ba6TCYHn_KGmrPbu-fCDtHkv9QcGBNqLUUdT6fu1/pub
