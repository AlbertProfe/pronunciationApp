package dev.pronunciationAppBack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.ToString;

import jakarta.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StageWord {

    @Id
    private String id;
    @Enumerated(EnumType.STRING)
    private Status status;
    private int listenedQty;
    private Date lastUpdatedDateTime;

    public enum Status {
        DONE, PENDING, FAIL
    }
}
