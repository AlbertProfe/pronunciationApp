# How to install a tar.gz package in Linux

## Summary

> Installing any package on `Linux Mint` involves extracting the downloaded `tar.gz `file from the `Downloads` folder and moving it to the `/opt` directory.

Begin by opening a terminal and navigating to the `Downloads` directory. Use the `tar` command to extract the archive, then transfer the extracted folder to<mark> /opt</mark> using `sudo` privileges.

Create a symbolic link to make the software app accessible system-wide by linking the executable to `/usr/local/bin`.

### The /opt directory

The `/opt` directory in Linux is typically used for installing <mark>optional</mark> or add-on software packages. Moving any package to this location is a common practice for third-party applications.

```bash
sudo mv smartgit /opt/
```

This command ensures that `SmartGit` is placed in a standard location for optional software, making it easier to manage and access system-wide. After executing this command, `SmartGit` will be available in the "`/opt`" directory, which is often used for manually installed software that isn't part of the default system installation.

## Example: SmartGit 24.1.1

To install <mark>SmartGit 24.1.1</mark> on Linux Mint from the downloaded tar.gz file, follow these steps:

1. Open a terminal window.

2. Navigate to your Downloads folder:
   
   ```bash
   cd ~/Downloads
   ```

3. Extract the downloaded archive:
   
   ```bash
   tar xzf smartgit-linux-24_1_1.tar.gz
   ```

4. Move the extracted folder to the /opt directory:
   
   ```bash
   sudo mv smartgit /opt/
   ```

5. Create a symbolic link to make SmartGit accessible from anywhere:
   
   ```bash
   sudo ln -s /opt/smartgit/bin/smartgit.sh /usr/local/bin/smartgit
   ```

6. Create a desktop menu item (optional):
   
   ```bash
   /opt/smartgit/bin/add-menuitem.sh
   ```

You can now launch SmartGit by typing `smartgit` in the terminal or by finding it in your application menu[1][3][4].

#### Additional Notes

- Ensure you have Java installed on your system before running SmartGit[9].

- If you want to remove the desktop menu item later, you can use:
  
  ```bash
  /opt/smartgit/bin/remove-menuitem.sh
  ```

Remember to replace "smartgit-linux-24_1_1.tar.gz" with the exact filename if it differs in your Downloads folder.

Citations:
[1] https://www.syntevo.com/smartgit/download/
[2] https://thelinuxforum.com/articles/567-install-git-on-linux-mint
[3] http://codingadventures.org/2017/04/12/install-smartgit-in-ubuntu-without-apt-get/
[4] https://github.com/yForecasting/mint
[5] https://www.youtube.com/watch?v=L1R-kmv1m_U
[6] https://stackoverflow.com/questions/47171849/smartgit-installation-on-ubuntu-16-04
[7] https://dev.to/bikodes/introduction-to-git-for-beginners-11kc
[8] https://idroot.us/install-smartgit-ubuntu-24-04/
[9] https://onet.com.vn/install-smartgit-git-client-on-ubuntu-linux-mint-centos-fedora-rhel/
[10] https://stackoverflow.com/questions/12185222/smartgit-installation-and-usage-on-ubuntu
