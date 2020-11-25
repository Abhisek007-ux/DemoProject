package com.usertackingmodule.demo1;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="registereduserdata")
public class Demo1Entity implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public Demo1Entity(int id, String name, Date registrationDate, String contactNumber, String mailId) {
		super();
		this.id = id;
		this.name = name;
		this.registrationDate = registrationDate;
		this.contactNumber = contactNumber;
		this.mailId = mailId;
	}
	@Id
	@Column(name="id")
	
	private int id;
	@Column(name="name")
	
	private String name;
	/**
	 * @return the registrationDate
	 */

	@Column(name="registrationdate")
	
	private Date registrationDate;
	/**
	 * @return the registrationDate
	 */
	public Date getRegistrationDate() {
		return registrationDate;
	}
	/**
	 * @param registrationDate the registrationDate to set
	 */
	
	@Column(name="contactnumber")
	private String contactNumber;
	/**
	 * @return the contactNumber
	 */
	public String getContactNumber() {
		return contactNumber;
	}
	/**
	 * @param contactNumber the contactNumber to set
	 */
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}
	@Column(name="emailid")
	
	private String mailId;
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the mailId
	 */
	public String getMailId() {
		return mailId;
	}
	/**
	 * @param mailId the mailId to set
	 */
	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
	
	

}
