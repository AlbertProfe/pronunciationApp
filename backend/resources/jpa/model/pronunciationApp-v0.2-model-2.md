# pronunciationApp-v0.2-model-2.0

## Summary

The class diagram represents a <mark>gamified system for learning words</mark>, involving multiple users.

- The **User** class tracks individual profiles and progress through the **GameProgress** class, which monitors stages and scores. Words are central, belonging to categories (**Category**) and levels (**Level**), with associated pronunciations (**Pronunciation**).

- Users advance through **Stages**, which track progress and learned words using **StageWords**. Each stage is tied to a level, ensuring structured progression.

The system also incorporates metadata like word difficulty, phonetic spelling, and stage statuses for personalized learning.

---

### Note

The context assumes multiple users in a gamified learning environment where the **Word** class is <mark>the core entity driving the system.</mark>



```mermaid
classDiagram
    class User {
        +String id
        +String usrname
        +int age
        +String email
        +int totalScore
        +boolean isActive
    }
    class Word {
        +String id
        +String text
        +String description
        +String sentence
        +int difficulty
        +boolean isCommon
    }
    class Pronunciation {
        +String id
        +String audioName
        +int audioSize
        +String audioUrl
        +String phoneticSpelling
        +String speakerGender
        +enum type  // canonical, recorded 
    }
    class Level {
        +String id
        +int number
        +String name
        +int requiredScore
        +boolean isBlocked
    }
    class Category {
        +String id
        +String categoryName
        +String subCategoryName
        +String description
        +int wordCount
    }
    class GameProgress {
        +String id
        +int currentScore
        +enum currentStage  // stage_01, stage_02 
        +Date lastPlayedDate
        +int wordsLearned
    }
    class Stage {
        +String id
        +String name
        +String avatarUrl
        +String status
        +int progress
        +int currentScore
    }
    class StageWord {
        +String id
        +enum status  // done, pending, fail 
        +Date lastUpdatedDateTime
    }


    User "1" -- "1" GameProgress : tracks progress
    Word "1" -- "*" Pronunciation : has pronunciation
    Word "*" -- "1" Category : belongs to group
    Word "*" -- "1" Level : has level
    GameProgress "1" -- "*" Stage : is at stage
    Stage "*" -- "1" Level : has level
    Stage "1" -- "*" StageWord : has tracked words
    Word "1" -- "*" StageWord : has stageword
```
