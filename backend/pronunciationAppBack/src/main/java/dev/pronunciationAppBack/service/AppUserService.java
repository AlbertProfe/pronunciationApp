package dev.pronunciationAppBack.service;

import dev.pronunciationAppBack.model.AppUser;
import dev.pronunciationAppBack.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }

    public Optional<AppUser> findAppUserById(String id) {
        return appUserRepository.findById(id);
    }

    public Optional<AppUser> createAppUser(AppUser appUser) {
        return Optional.of(appUserRepository.save(appUser));
    }

    public Optional<AppUser> updateAppUser(AppUser appUserDetails) {
        Optional<AppUser> existingUser = findAppUserById(appUserDetails.getId());

        if (existingUser.isPresent()) {
            AppUser updatedUser = existingUser.get();
            updatedUser.setName(appUserDetails.getName());
            updatedUser.setEmail(appUserDetails.getEmail());
            updatedUser.setPassword(appUserDetails.getPassword());
            return Optional.of(appUserRepository.save(updatedUser));
        }
        return Optional.empty();

    }

    public boolean deleteAppUser(String id) {
        appUserRepository.deleteById(id);
        Optional<AppUser> deletedUser = appUserRepository.findById(id);
        return deletedUser.isEmpty();
    }

    public Optional<AppUser> findAppUserByEmail(String email) {
        return appUserRepository.findByEmail(email);
    }

    public boolean deleteAllAppUsers() {
        appUserRepository.deleteAll();
        return getAppUserCount() == 0;
    }

    public long getAppUserCount() {
        return appUserRepository.count();
    }

}
