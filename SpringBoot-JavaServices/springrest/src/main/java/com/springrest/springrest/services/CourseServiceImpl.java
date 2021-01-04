package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;
@Service
public class CourseServiceImpl implements CourseService {

	// Here using the autowired annotation so we can inject the mysql dependency
	@Autowired
	private CourseDao courseDao;
	
	List<Course> list;
	
	public CourseServiceImpl(){
		list = new ArrayList<Course>();
		list.add(new Course(1212, "Java course", "test description1"));
		list.add(new Course(1215, "Python course", "test description2"));
		list.add(new Course(1213, "PHP course", "test description3"));
		list.add(new Course(1214, "Spring course", "test description4"));
	}
	@Override
	public List<Course> getCourses() {
//		return list;
		return courseDao.findAll();
	}
	@Override
	public Course getCourse(long id) {
//		Course c =null;
//		
//		for(Course course :list) {
//			if(course.getId() == id) {
//				c= course;
//				break;
//			}
//		}
//		return c;
		return courseDao.getOne(id);
	}
	
	@Override
	public Course addCourse(Course c) {
//		list.add(c);
		courseDao.save(c);
		return c;
	}
	@Override
	public Course updateCourse(Course c) {
//		list.forEach(e->{
//			if(e.getId() == c.getId()) {
//				e.setTitle(c.getTitle());
//				e.setDescription(c.getDescription());
//			}
//		});
		// if the course exists it'll update the course or it'll add the course
		courseDao.save(c);
		return c;
	}
	@Override
	public void deleteCourse(long id) {
//		list = list.stream().filter(e->e.getId() != id ).collect(Collectors.toList());
		Course course = courseDao.getOne(id);
		courseDao.delete(course);
	}

}
